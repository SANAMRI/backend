const {Client} =require("../models/client.model")


const fetchClient = async (req, res) => {
try {
  const response = await Client.find({})
  res.status(200).send(response)
} catch (error) {
  console.log(error)
}
};
const createClient = async (req, res) => {
  try {
    const response = await Client.create(req.body)
    res.status(201).send(response)
  } catch (error) {
    console.log(error)
  }
};
const deleteClient = async (req, res) => {
  try {
    const response = await Client.deleteOne({
      _id : req.params.id
    })
    res.status(202).send(response)
  } catch (error) {
    console.log(error)
  }
};
//request put
const updateClient = async(req, res) => {
try {
  const response= await Client.findOneAndUpdate({
    _id:req.params.id
  },req.body)
  res.status(201).send(response)
} catch (error) {
  console.log(error)
}
};

module.exports = { fetchClient, createClient, deleteClient, updateClient };
