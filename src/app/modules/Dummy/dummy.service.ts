// const demoUser =async()=>{
//     return {
//         message:"Demo User Created"
//     }
// }

// export const demoService={demoUser}

export const DummySerivce = {
  async demoUser() {
    return {
      message: "Dummy User Created of Class based pattern",
    };
  },
  async testUser() {
    return {
      message: "Test User Created",
    };
  },
};
