from django.db import models

# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username


class Playlist(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="playlists")
    playlist_title = models.CharField(max_length=100)

    def __str__(self):
        return self.playlist_title


class Video(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="videos")
    playlist = models.ForeignKey(
        Playlist, on_delete=models.CASCADE, related_name="playlist", null=True, blank=True)
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    date_time = models.DateTimeField(auto_now_add=True)
    video_url = models.URLField()

    def __str__(self):
        return self.title


class Comment(models.Model):
    video = models.ForeignKey(
        Video, on_delete=models.CASCADE, related_name="comments", null=True, blank=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="users"
    )
    description = models.CharField(max_length=200)

    def __str__(self):
        return self.description
