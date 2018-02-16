from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'api/posts', views.PostViewSet)


urlpatterns = [
    path('', views.home, name='home'),
    path('', include(router.urls))

]