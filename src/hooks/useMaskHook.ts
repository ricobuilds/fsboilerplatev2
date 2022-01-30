/* 
Use: This is a hook that allows you to use a mask to mask the output of a function
Params: address, Integer: endCharCount, Integer: dotCount
Process: procress the string and mask the output
Present: updated string content like "0xc1...cb39"
*/
export const useMaskHook = (address: string, firstCharCount = address.length, endCharCount = 0, dotCount = 3) => {
  let convertedAddress = "";
  convertedAddress += address.substring(0, firstCharCount);
  convertedAddress += ".".repeat(dotCount);
  convertedAddress += address.substring(address.length - endCharCount, address.length);
  return convertedAddress;
};