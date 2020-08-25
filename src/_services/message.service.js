import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

const subject = new Subject();

export const messageService = {
    sendMessage: message => subject.next(message),
    clearMessages: () => subject.next(),
    onMessage: (type) => subject.asObservable().pipe(filter(data => data.type === type)),
};
