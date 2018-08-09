from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers
from django.views.generic import TemplateView
from .views import PostViewSet

router = routers.DefaultRouter()
router.register(r'api/posts', PostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('ckeditor', include('ckeditor_uploader.urls')),
    path('post/<post_id>', TemplateView.as_view(template_name='index.html'))
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# only for developing In production we use nginx to serve media
