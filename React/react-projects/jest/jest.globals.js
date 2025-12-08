import 'whatwg-fetch'
import { TextEncoder, TextDecoder } from 'util'
import { TransformStream, ReadableStream, WritableStream } from 'stream/web'
import { BroadcastChannel } from 'worker_threads'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
global.TransformStream = TransformStream
global.ReadableStream = ReadableStream
global.WritableStream = WritableStream
global.BroadcastChannel = BroadcastChannel
