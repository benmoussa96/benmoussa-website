export function readableFileSize(attachmentSize: number) {
  if (attachmentSize <= 0) return "Zero bytes";

  const kbSize = attachmentSize / 1024;

  if (kbSize > 1024) {
    const mbSize = kbSize / 1024;

    if (mbSize > 1024) {
      return `${(mbSize / 1024).toFixed(2)}GB`;
    } else {
      return `${mbSize.toFixed(2)}MB`;
    }
  } else {
    return `${kbSize.toFixed(2)}KB`;
  }
}
