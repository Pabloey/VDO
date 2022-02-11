from rest_framework import serializers
from .models import User, UploadedVideo, Playlist, Comment, PlaylistVideo


class UploadedVideoSerializer(serializers.ModelSerializer):

    user = serializers.HyperlinkedRelatedField(
        view_name="user_detail",
        read_only=True
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = UploadedVideo
        fields = ('id', 'title', 'description', 'date_time',
                  'video_url', 'user', 'user_id')


class PlaylistSerializer(serializers.HyperlinkedModelSerializer):

    user = serializers.HyperlinkedRelatedField(
        view_name="user_detail",
        read_only=True
    )

    user_id = serializers.PrimaryKeyRelatedField(
        queryset=User.objects.all(),
        source='user'
    )

    class Meta:
        model = Playlist
        fields = ('id', 'playlist_title', 'user', 'user_id')


class UserSerializer(serializers.ModelSerializer):

    videos = UploadedVideoSerializer(
        many=True,
        read_only=True
    )

    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name="user_detail"
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'videos', 'user_url', 'videos')
