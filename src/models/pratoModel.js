import prisma from "../../prisma/client.js";

class PratoModel {
  getAll = async () => {
    return await prisma.pratos.findMany();
  };

  create = async (
    name,
    description,
    price,
    category,
    ingredients,
    imageUrl,
    prepTime
  ) => {
    return await prisma.pratos.create({
      data: {
        name,
        description,
        price,
        category,
        ingredients,
        imageUrl,
        prepTime,
      },
    });
  };

  update = async (
    id,
    name,
    description,
    price,
    category,
    ingredients,
    imageUrl,
    prepTime
  ) => {
    try {
      const prato = await prisma.pratos.update({
        where: { id },
        data: {
          name,
          price,   //Dev mexeu aqui e tirou alguns campos, para o PUT funcionar
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
      const pratoDeletada = await prisma.pratos.delete({
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
