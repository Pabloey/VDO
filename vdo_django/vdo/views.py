from rest_framework import generics
from .serializers import UserSerializer, UploadedVideoSerializer, PlaylistSerializer
from .models import User, UploadedVideo, Playlist, PlaylistVideo, Comment

# Create your views here.


class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UploadedVideoList(generics.ListCreateAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer


class UploadedVideoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UploadedVideo.objects.all()
    serializer_class = UploadedVideoSerializer


class PlaylistList(generics.ListCreateAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer


class PlaylistDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Playlist.objects.all()
    serializer_class = PlaylistSerializer
