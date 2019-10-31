

/**
 * 
 * @summary Convert dataURI into blob -   // convert base64 to raw binary data held in a string
 * 
 * @param { string } dataURI 
 * @param { string | optional }type 
 */

export function DataURItoBlob(dataURI: string, type: string = 'blob' ) {
  // Decoding Based64 dataURI encoding.
  const byteString = atob(dataURI.split(',')[1]);

  // Declare Mime type
  const mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to an ArrayBuffer
  const AB = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  const ia = new Uint8Array(AB);

  // set the bytes of the buffer to the correct values
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }


  // Write the ArrayBuffer to a blob.
  const blob = new Blob([AB], {
    type: mimeType
  });



  // IF NEEDED TYPE IS FILE
  if (type === 'file') {
    return new File([blob], 'converted', {
      type: mimeType,
      lastModified: new Date().getDate()
    });
  }
  return blob;
}
