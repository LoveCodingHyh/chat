declare interface GlobalProperties {
  $message(message: string, type?: any): () => any
  $alert(text: string, title?: string, callback?: () => any): () => any
  $blobToDataURL(blob: Blob, cb: (base64Url: string) => void): () => void
  [k: string]: unknown
}

declare interface FriendListMsg {
  msg: string
  date: string
  type: 'image' | 'text' | 'inform'
  avatar?: string
  isMe?: boolean
  name?: string
  userId?: string
}

declare interface FriendList {
  name: string
  userId: string
  avatar: string
  list: FriendListMsg[]
}

declare interface Prompt {
  newMsgVoice: Ref<HTMLAudioElement>
  findMeVoice: Ref<HTMLAudioElement>
}
