from rest_framework import serializers
from .models import User, UploadedVideo, Playlist, Comment, PlaylistVideo


class UserSerializer(serializers.ModelSerializer):
    videos = serializers.HyperlinkedRelatedField(
        view_name="video_detail",
        many=True,
        read_only=True
    )
    user_url = serializers.ModelSerializer.serializer_url_field(
        view_name="user_detail"
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'videos', 'user_url')


class UploadedVideoSerializer(serializers.HyperlinkedModelSerializer):

    user = serializers.HyperlinkedRelatedField(
        view_name="user_detail",
        read_only=True
    )

    upload_id = serializers.PrimaryKeyRelatedField(
        queryset=UploadedVideo.objects.all(),
        source='user'
    )

    class Meta:
        model = UploadedVideo
        fields = ('id', 'title', 'description', 'date_time',
                  'video_url', 'user', 'upload_id')
