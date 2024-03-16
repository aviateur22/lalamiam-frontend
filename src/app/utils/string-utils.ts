export class StringUtil {

  /**
   * Remplace des mots dans un text
   * @param text
   * @param replacements
   * @returns
   */
  static stringReplacement(text: string, replacements: { [key: string]: string }): string {
    for (let key in replacements) {
      text = text.replace(new RegExp(key, 'g'), replacements[key]);
    }
    return text
  }
}
