import * as Filesystem from "expo-file-system";

const renamePathAndMove = async (originalPath) => {
  const fileName = originalPath.split("/").pop();
  const path = Filesystem.documentDirectory + fileName;
  await Filesystem.moveAsync({
    from: originalPath,
    to: path,
  });
  return path;
};

export default renamePathAndMove;
