# Generated by Django 2.0 on 2018-08-10 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0009_auto_20180810_0829'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='is_published',
            field=models.BooleanField(default=1),
            preserve_default=False,
        ),
    ]