from django.contrib.auth.models import User
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST, HTTP_201_CREATED

from .validators import validate_username


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def create_user(request):
    username = request.data.get("username")
    email = request.data.get("email")
    location = request.data.get("location")
    password = request.data.get("password")

    if not validate_username(username):
        return Response({'error': 'Username may contain more than 5 symbols'}, status=HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=password, email=email, password=password)
    user.profile.location = location
    user.save()

    return Response(status=HTTP_201_CREATED)
