# Generated by Django 4.0.2 on 2022-02-09 15:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('vdo', '0003_rename_title_playlist_playlist_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='playlist',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='playlist', to='vdo.playlist'),
        ),
    ]
