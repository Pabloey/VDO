from django.contrib import admin
from .models import User, Video, Playlist, Comment

# Register your models here.
admin.site.register(User)
admin.site.register(Video)
admin.site.register(Playlist)
admin.site.register(Comment)
