import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId : "consumerMessage",
    brokers : [':9092']
})

const caalll =async () => {
    const consumer = kafka.consumer({
        groupId : "miners"
    })

    await consumer.connect();
    await consumer.subscribe({topic : "blockchain", fromBeginning : true});
    await consumer.run({
        eachMessage :async ( {message}) => {
            console.log({
              value : message.value?.toString()
            })
        }
    })
}

caalll();