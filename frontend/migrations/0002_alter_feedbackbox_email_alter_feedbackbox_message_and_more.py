# Generated by Django 4.2.4 on 2023-12-21 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('frontend', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedbackbox',
            name='Email',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='feedbackbox',
            name='Message',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='feedbackbox',
            name='Name',
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='feedbackbox',
            name='Subject',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
