/* 
Use: This is a hook that allows you to use a mask to hide the output of a function
Example: Partially masnking an EOA address
Params: String: address, Integer: endCharCount, Integer: dotCount
*/
export const useMaskHook = (address, firstCharCount = address.length, endCharCount = 0, dotCount = 3) => {
  let convertedAddress = "";
  convertedAddress += address.substring(0, firstCharCount);
  convertedAddress += ".".repeat(dotCount);
  convertedAddress += address.substring(address.length - endCharCount, address.length);
  return convertedAddress;
};