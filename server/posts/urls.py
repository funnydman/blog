from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers

from .views import PostViewSet

router = routers.DefaultRouter()
router.register(r'api/posts', PostViewSet)

urlpatterns = [

                  path('', include(router.urls)),
                  path('ckeditor', include('ckeditor_uploader.urls')),

              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# only for developing In production we use nginx to serve media
