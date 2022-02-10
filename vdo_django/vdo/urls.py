from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('uploaded/', views.UploadedVideoList.as_view(), name='video_list'),
    path('uploaded/<int:pk>', views.UploadedVideoDetail.as_view(),
         name='video_detail'),
]
