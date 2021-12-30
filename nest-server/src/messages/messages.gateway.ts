import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';


const SocketMap = new Map()

@WebSocketGateway(3001, { cors: true })
export class MessagesGateway {
  @SubscribeMessage('connection')
  handleConnection(client:any, payload) {
    SocketMap.set(payload, client)
    // console.log(SocketMap)
  }

  @SubscribeMessage('messageToServer')
  handleMessage(client:any, payload: any) {
    const cl = SocketMap.get(payload.id)
    cl && cl.emit(`messageToClient`, payload.message)
    // client.emit('messageToClient', `ECho ${payload} from ${client}`)
  }
}
