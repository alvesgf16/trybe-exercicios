import re


def validate_email(email):
    email_regex = re.compile("[a-zA-Z][a-zA-Z0-9-_]+@[a-zA-Z0-9]+[.].{0,3}")

    if not email_regex.fullmatch(email):
        raise ValueError()


def filter_valid_emails(emails):
    valid_emails = []

    for email in emails:
        try:
            validate_email(email)
        except ValueError as exc:
            print(exc)
        else:
            valid_emails.append(email)

    return valid_emails
