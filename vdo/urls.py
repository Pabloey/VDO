from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('username/<str:username>', views.UserNameLookup.as_view(), name='user_detail'),
    path('uploaded/', views.UploadedVideoList.as_view(), name='video_list'),
    path('uploaded/<int:pk>', views.UploadedVideoDetail.as_view(),
         name='video_detail'),
    path('playlist/', views.PlaylistList.as_view(), name='playlist_list'),
    path('playlist/<int:pk>', views.PlaylistDetail.as_view(), name='playlist_detail'),
    path('comments/', views.CommentList.as_view(), name='comment_list'),
    path('comments/<int:pk>', views.CommentDetail.as_view(), name="comment_detail")
]
