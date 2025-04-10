import prisma from "../../prisma/client.js";

class PratoModel {
  getAll = async () => {
    return await prisma.task.findMany();
  };

  create = async ( name, description, price, category, ingredients, imageUrl, prepTime) => {
    return await prisma.task.create({
      data: {
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime
      },
    });
  };

  update = async ( name, description, price,category, ingredients, imageUrl, prepTime) => {
    try {
      const prato = await prisma.task.update({
        where: { id },
        data: {
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime
        },
      });

      return prato;
    } catch (error) {
      console.log("Error", error);
      throw error;
    }
  };

  delete = async (id) => {
    try {
      const pratoDeletada = await prisma.task.delete({
        where: { id },
      });

      return pratoDeletada;
    } catch (error) {
      console.log("Erro ao deletar o prato!", error);
      throw error;
    }
  };
}
export default new PratoModel();
