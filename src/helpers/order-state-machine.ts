export const urlStateMachine = new Map<string, string>([
  ['created', 'accept'],
  ['cooking', 'ready'],
  ['ready', 'delivery'],
  ['delivery', 'finish'],
  ['finish', 'finish'],
  ['cancel', 'cancel']
]);

interface TextSM {
  next: string;
  cancel: string;
}

export const textStateMachine = new Map<string, TextSM>([
  ['created', { next: 'Принять заказ', cancel: 'Отклонить заказ' }],
  ['cooking', { next: 'Заказ готов', cancel: 'Отменить заказ' }],
  ['ready', { next: 'Поиск курьера', cancel: 'Отменить заказ' }],
  ['delivery', { next: 'Заказ передан курьеру', cancel: 'Отменить заказ' }],
  ['finish', { next: '', cancel: '' }],
  ['cancel', { next: '', cancel: '' }]
]);
