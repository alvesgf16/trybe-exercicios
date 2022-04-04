import Email from './Email';

export default class MailList {
  private _mailList: Email[];

  constructor(mailList: Email[]) {
    this._mailList = mailList;
  }

  get all(): Email[] { return this._mailList; }

  getByEmailFrom(mailAddress: string): Email[] {
    return this._mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailAddress: string): Email[] {
    return this._mailList.filter((mail) => mail.to === mailAddress);
  }

  getBySubject(searchString: string): Email[] {
    return this._mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1,
    );
  }

  addEmail(newMail: Email): void { this._mailList.push(newMail); }

  removeEmail(mailToRemove: Email): void {
    this._mailList = this._mailList.filter((mail) => mail !== mailToRemove);
  }
}
