import { CreditCardService } from "../services/creditcard.service.js";

export const CreditCardController = {
  create: async (req, res) => {
    try {
      const card = await CreditCardService.create(req.body);
      res.status(201).json(card);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
  getByEmail: async (req, res) => {
    const card = await CreditCardService.getByEmail(req.params.email);
    card ? res.json(card) : res.status(404).json({ error: "No encontrada" });
  },
  update: async (req, res) => {
    const updated = await CreditCardService.update(req.params.id, req.body);
    res.json(updated);
  },
  delete: async (req, res) => {
    await CreditCardService.delete(req.params.id);
    res.json({ msg: "Eliminada" });
  }
};
