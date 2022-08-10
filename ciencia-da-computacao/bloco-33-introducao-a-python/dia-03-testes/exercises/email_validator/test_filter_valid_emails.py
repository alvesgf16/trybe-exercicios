import pytest

from filter_valid_emails import filter_valid_emails, validate_email


def test_pattern_is_valid():
    assert validate_email("a_a1a-a@website123.ext") is None


def test_email_with_wrong_pattern():
    with pytest.raises(ValueError):
        validate_email('erradodominiocom')


def test_email_with_invalid_character_in_username():
    with pytest.raises(ValueError):
        validate_email('errad#@dominio.com')


def test_email_without_letter_as_first_character():
    with pytest.raises(ValueError):
        validate_email('3rrado@dominio.com')


def test_email_with_invalid_character_in_website_name():
    with pytest.raises(ValueError):
        validate_email('errado@dom!nio.com')


def test_email_with_extension_longer_than_3_characters():
    with pytest.raises(ValueError):
        validate_email('errado@dominio.comm')


def test_if_dont_have_emails_returns_empty_list():
    assert filter_valid_emails([]) == []


def test_only_valid_emails():
    emails = ["username@website.com"]
    expected_emails = ["username@website.com"]
    assert filter_valid_emails(emails) == expected_emails


def test_invalid_emails_should_be_filtered():
    emails = ["inv*alid@website.com"]
    expected_emails = []
    assert filter_valid_emails(emails) == expected_emails


def test_valid_and_invalid_emails_returns_only_valids():
    emails = ["username@website.com", "inv*alid@website.com"]
    expected_emails = ["username@website.com"]
    assert filter_valid_emails(emails) == expected_emails
