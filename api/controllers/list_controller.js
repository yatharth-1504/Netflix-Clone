const List = require("../models/List");
const { getRandomList } = require("../utils/index");

module.exports.add_list = async (req, res) => {
  try {
    if (!req.decoded.is_admin) {
      return res.status(401).send("UnAuthorised");
    }
    const list = new List(req.body);
    await list.save();
    res.status(201).json(list);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

module.exports.delete_list = async () => {
  try {
    if (!req.decoded.is_admin) {
      return res.status(401).send("UnAuthorised");
    }
    const list = await List.deleteOne({ _id: req.params.id });
    res.status(200).send("List deleted");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.get_lists = async (req, res) => {
  try {
    if (req.query.type) {
      if (req.query.genre) {
        const lists = await List.find({
          type: req.query.type,
          genre: req.query.genre,
        });
        const random_lists = getRandomList(lists, lists.length);
        return res.status(201).json(random_lists);
      } else {
        const lists = await List.find({ type: req.query.type });
        const random_lists = getRandomList(lists, lists.length);
        return res.status(201).json(random_lists);
      }
    } else {
      const lists = await List.find();
      const random_lists = getRandomList(lists, lists.length);
      return res.status(201).json(random_lists);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
