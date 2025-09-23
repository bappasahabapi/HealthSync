import { Server } from "http";
import app from "./app";

const port =4001;

async function main() {
    const server:Server=app.listen(port,()=>{
    console.log(`🚀 Server is running on `,port)
})
}

//call the server
main()

