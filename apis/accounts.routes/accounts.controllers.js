const getAllAccounts = (req, res) => {
  console.log(req);
  return res.status(200).json(accounts);
};

const createAcc = (req, res) => {
  const id = accounts[accounts.length - 1].id + 1;
  console.log(req.body);
  const newAcc = { id, ...req.body, funds: 0 };
  accounts.push(newAcc);
  return res.status(201).json(accounts);
};

const deleteAcc = (req, res) => {
  const { accID } = req.params;
  if (accounts.find((x) => x.id === +accID)) {
    accounts = accounts.filter((x) => x.id !== +accID);
    res.status(204).json(accounts);
  } else {
    return res.status(404).json({ message: "ACCOUNT NOT FOUND" });
  }
};

const updateAcc = (req, res) => {
  const { accID } = req.params;
  const findAcc = accounts.find((x) => x.id === +accID);
  if (findAcc) {
    const accIndex = accounts.indexOf(findAcc);
    accounts[accIndex] = { id: findAcc.id, ...req.body };
    return res.status(201).json(accounts);
  } else {
    res.status(404).json({ message: "NOT FOUND" });
  }
};

module.exports = { updateAcc, deleteAcc, createAcc, getAllAccounts };
