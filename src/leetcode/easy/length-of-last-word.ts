function lengthOfLastWord(words: string): number {
  const filteredWords = words.split(" ").filter((word) => word !== "");
  return filteredWords[filteredWords.length - 1].length;
}

console.log(lengthOfLastWord("   fly me   to   the moon "));


