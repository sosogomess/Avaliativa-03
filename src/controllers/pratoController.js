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
    const { name, description, price, category, ingredients, imageUrl, prepTime } = req.body;
    try {
      if (!name) {
        return res.status(400).json({ erro: "Nome é obrigatório" });
      }

      if (!description) {
        return res.status(400).json({ erro: "Descrição é obrigatória" });
      }

      if (!price) {
        return res.status(400).json({ erro: "Preço é obrigatório" });
      }

      if (!category) {
        return res.status(400).json({ erro: "Categoria é obrigatória" });
      }

      if (!ingredients) {
        return res.status(400).json({ erro: "Ingredientes é obrigatório" });
      }

      const novoPrato = await pratoModel.create( name, description, price, category, ingredients, imageUrl, prepTime);
      res.status(201).json(novoPrato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar Prato" });
    }
  };

  
  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const prato = await pratoModel.getById(parseInt(id));

      if (!prato) {
        return res.status(404).json({ erro: "Prato não encontrado" });
      }

      res.json(prato);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar o prato" });
    }
  };


  update = async (req, res) => {
    const { id } = req.params;
    const { name, description, price, category, ingredients, imageUrl, prepTime } = req.body;
    // console.log(id, name, price);
    

    try {
      const pratoAtualizado = await pratoModel.update(
        Number(id),
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime
      );

      if (!pratoAtualizado) {
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
