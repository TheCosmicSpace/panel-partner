import IMask from 'imask';

export function useInputMask(selector: string, options: { mask: string }) {
  function createMask() {
    const element: HTMLInputElement | null = document.querySelector(selector);
    if (!element) throw new Error('HTML Element Not Found');
    IMask(element, options);
  }
  return { createMask };
}
