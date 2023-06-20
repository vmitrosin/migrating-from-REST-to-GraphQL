import {Contacts} from './dbConnectors';

const resolvers = {
  getAllContacts: () => {
    return Contacts.find();
  },

  getOneContact: async ({id}) => {
    return await Contacts.findById({_id: id}).exec();
  },

  createContact: async ({input}) => { 
    await Contacts.create({
      name: input.name,
      email: input.email,
      phone: input.phone, 
    });
  },

  updateContact: async (_, {input}) => {
    const filter = {_id: input.id};
    await Contacts.updateOne(filter, {
      name: input.name,
      email: input.email,
      phone: input.phone
    });
  },

  deleteContact: async ({id}) => {
    const filter = {_id: id};
    await Contacts.findOneAndRemove(filter);
  }
}

export default resolvers;