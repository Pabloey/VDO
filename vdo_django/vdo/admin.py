from django.contrib import admin
from .models import User, UploadedVideo, Playlist, Comment, PlaylistVideo

# Register your models here.
admin.site.register(User)
admin.site.register(UploadedVideo)
admin.site.register(Playlist)
admin.site.register(Comment)
admin.site.register(PlaylistVideo)
