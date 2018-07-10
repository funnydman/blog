from django.urls import path, include
from posts.views import PostViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'api/posts', PostViewSet)

urlpatterns = [

    path('', include(router.urls))

]
