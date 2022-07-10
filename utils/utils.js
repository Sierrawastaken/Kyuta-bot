export function hasAttachment(message) {
    message = message.toJSON()
    return (message.attachments.length > 0 || message.embeds.length > 0 || message.stickers.length > 0 ? true : false)
}