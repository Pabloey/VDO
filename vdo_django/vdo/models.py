from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username


class Video(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="videos")
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    date_time = models.DateTimeField(auto_now_add=True)
    video_url = models.URLField()

    def __str__(self):
        return self.title


class Playlist(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="playlists")
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title

