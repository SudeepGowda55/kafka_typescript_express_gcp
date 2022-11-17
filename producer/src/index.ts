import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId : "minerMessage",
    brokers : [':9092']
})

const call = async () => {

    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
        topic : 'blockchain',
        messages : [{value :" 0x0005tgjjdgddh  aavv sent 2 eth to 567hhgfjbdfuhuhbd"}]
    })

    // await producer.disconnect()
}

call();



