import CreditCard from "../../models/mongo/CreditCard.js";

export const CreditCardRepository = {
  create: async (data) => await CreditCard.create(data),
  getByEmail: async (email) => await CreditCard.findOne({ email }),
  update: async (id, data) => await CreditCard.findByIdAndUpdate(id, data, { new: true }),
  delete: async (id) => await CreditCard.findByIdAndDelete(id)
};
