# Generated by Django 2.0 on 2018-08-10 08:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0008_auto_20180810_0819'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='category',
            new_name='categories',
        ),
    ]
