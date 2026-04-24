import mongoose from 'mongoose';

const url = 'mongodb://debaaot:debaaot@ac-cll83ri-shard-00-00.okqhkkb.mongodb.net:27017,ac-cll83ri-shard-00-01.okqhkkb.mongodb.net:27017,ac-cll83ri-shard-00-02.okqhkkb.mongodb.net:27017/?ssl=true&authSource=admin&replicaSet=atlas-m0n4jc-shard-0'

export async function dbConnect() {
    try {
        await mongoose.connect(url)
        console.log("MongoDb connected successfully");
    } catch (error) {
        console.log("Connection failed", error);
    }
};