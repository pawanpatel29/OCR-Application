import { BlobServiceClient, ContainerClient} from '@azure/storage-blob';

const sasToken = process.env.storagesastoken || '?sv=2019-12-12&ss=bfqt&srt=sco&sp=rwdlacupx&se=2021-03-31T15:22:13Z&st=2021-01-01T07:22:13Z&spr=https&sig=FVhtgV8zmhwD6I%2BCUDURS3ghXmP8Q%2FY%2FaP%2BXoW0ShrU%3D'; // SAS token
const containerName = `ocrappinputimage01`;
const storageAccountName = process.env.storageresourcename || "ocrfilesharestorageact01"; //Storage resource name

export const isStorageConfigured = () => {
  return (!storageAccountName || !sasToken) ? false : true;
}

const getBlobsInContainer = async (containerClient) => {
  const returnedBlobUrls = [];

  for await (const blob of containerClient.listBlobsFlat()) {
    // if image is public, just construct URL
    returnedBlobUrls.push(
      `https://${storageAccountName}.blob.core.windows.net/${containerName}/${blob.name}`
    );
  }

  return returnedBlobUrls;
}

const createBlobInContainer = async (containerClient, file) => {
  const blobClient = containerClient.getBlockBlobClient(file.name);
  const options = { blobHTTPHeaders: { blobContentType: file.type } };
  await blobClient.uploadBrowserData(file, options);
}

const uploadFileToBlob = async (file) => {
  if (!file) return [];

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(containerName);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  await createBlobInContainer(containerClient, file);

  return getBlobsInContainer(containerClient);
};

export const uploadFileToBlob2 = async (file) => {
  if (!file) return [];

  const blobService = new BlobServiceClient(
    `https://${storageAccountName}.blob.core.windows.net/?${sasToken}`
  );

  const containerClient = blobService.getContainerClient(`ocrreasonimage`);
  await containerClient.createIfNotExists({
    access: 'container',
  });

  await createBlobInContainer(containerClient, file);

  return getBlobsInContainer(containerClient);
};


export default uploadFileToBlob;

