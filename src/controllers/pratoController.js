import pratoModel from "../models/pratoModel.js";

class PratoController {
  getAll = async (req, res) => {
    try {
      const pratos = await pratoModel.getAll();
      res.json(pratos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar Pratos" });
    }
  };

  create = async (req, res) => {
    const { descricao } = req.body;
    // const descricao = req.body.descricao;
    try {
      if (!descricao) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      const novoPrato = await pratoModel.create(descricao);
      res.status(201).json(novoPrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Prato" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const { concluida, descricao } = req.body;

    try {
      const pratoAtualizado = await pratoModel.update(
        Number(id),
        concluida,
        descricao
      );

      if (!pratotualizada) {
        return res.status(404).json({ erro: "Prato não encontrado!" });
      }

      res.json(pratoAtualizado);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar o prato!" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await pratoModel.delete(Number(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Prato não encontrado" });
      }

      res.status(200).send({ message: "Prato deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao tentar excluir o prato!" });
    }
  };
}
export default new PratoController();
