import { CreditCardRepository } from "../repositories/mongoose/creditcard.repository.js";

export const CreditCardService = {
  create: async (data) => {
    if (!data.cardNumber || !data.cardHolder || !data.email) {
      throw new Error("Campos obligatorios faltantes");
    }
    const existing = await CreditCardRepository.getByEmail(data.email);
    if (existing) throw new Error("Ya existe una tarjeta para ese email");
    return await CreditCardRepository.create(data);
  },
  getByEmail: async (email) => await CreditCardRepository.getByEmail(email),
  update: async (id, data) => await CreditCardRepository.update(id, data),
  delete: async (id) => await CreditCardRepository.delete(id)
};
