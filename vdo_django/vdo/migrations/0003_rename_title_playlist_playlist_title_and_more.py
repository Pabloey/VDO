# Generated by Django 4.0.2 on 2022-02-09 15:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vdo', '0002_rename_comments_comment'),
    ]

    operations = [
        migrations.RenameField(
            model_name='playlist',
            old_name='title',
            new_name='playlist_title',
        ),
        migrations.AlterField(
            model_name='comment',
            name='user',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='comments', to='vdo.video'),
        ),
    ]
